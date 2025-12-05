import { html, css } from "lit";
import { property, state } from "lit/decorators.js";
import { View } from "@calpoly/mustang";
import { ParkData } from "server/models";
import reset from "../styles/reset.css.ts";
import headings from "../styles/headings.css.ts";
import { Model } from "../model";
import { Msg } from "../messages";

export class ParkViewElement extends View<Model, Msg> {
  @property({ attribute: "park-id" }) parkId?: string;

  @state()
  get park(): ParkData | undefined {
    return this.model.park;
  }

  @state()
  get error(): string | undefined {
    return this.model.error;
  }

  constructor() {
    super("parks:model");
  }

  attributeChangedCallback(
    name: string,
    oldVal: string | null,
    newVal: string | null
  ) {
    super.attributeChangedCallback(name, oldVal, newVal);
    if (name === "park-id" && newVal && newVal !== oldVal) {
      this.dispatchMessage(["park/request", { parkId: newVal }]);
    }
  }

  get parkName(): string {
    if (!this.parkId) return "";
    const names: Record<string, string> = {
      yosemite: "Yosemite",
      zion: "Zion",
      channel: "Channel Islands",
    };
    return `${
      names[this.parkId] ||
      this.parkId.charAt(0).toUpperCase() + this.parkId.slice(1)
    } National Park`;
  }

  static styles = [
    reset.styles,
    headings.styles,
    css`
      :host {
        display: block;
        padding: 2rem 1rem;
        max-width: 1200px;
        margin: 0 auto;
      }
      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: var(--color-text-header, #f8fafc);
      }
      nav.breadcrumb {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        color: var(--color-muted, #94a3b8);
        font-size: 0.95rem;
        margin-bottom: 0.5rem;
      }
      nav.breadcrumb a {
        color: var(--color-accent, #38bdf8);
        text-decoration: none;
      }
      nav.breadcrumb a:hover {
        text-decoration: underline;
      }
      nav.breadcrumb .spacer {
        flex: 1;
      }
      nav.breadcrumb .edit {
        font-weight: 600;
      }
      .learn-more {
        margin-top: 2rem;
        font-size: 1rem;
      }
      .learn-more a {
        color: var(--color-accent, #38bdf8);
        text-decoration: none;
      }
      .learn-more a:hover {
        text-decoration: underline;
      }
    `,
  ];

  render() {
    if (!this.parkId) return html`<p>No park specified</p>`;
    if (this.error) return html`<p>Error: ${this.error}</p>`;
    if (!this.park) return html`<p>Loading park data...</p>`;
    const parkSites: Record<string, string> = {
      yosemite: "https://www.nps.gov/yose/index.htm",
      zion: "https://www.nps.gov/zion/index.htm",
      channel: "https://www.nps.gov/chis/index.htm",
    };
    const site = parkSites[this.parkId] || "https://www.nps.gov";
    const enriched = enrichPark(this.parkId, this.park);
    return html`
      <nav class="breadcrumb">
        <a href="/app">Home</a>
        <span>›</span>
        <span>${this.parkName}</span>
        <span class="spacer"></span>
        <a class="edit" href="/app/park/${this.parkId}/edit">Edit</a>
      </nav>
      <h1>${this.parkName}</h1>
      <park-grid .park=${enriched}></park-grid>
      <p class="learn-more">
        To learn more about ${this.parkName}, visit their website
        <a href=${site} target="_blank" rel="noreferrer">here</a>.
      </p>
    `;
  }
}

function enrichPark(parkId: string | undefined, park: ParkData): ParkData {
  if (!parkId) return park;

  const byPark: Record<string, Partial<ParkData>> = {
    yosemite: {
      activities: [
        {
          title: "Rock Climbing",
          imgSrc: "/images/yosemite/activities/climbing.jpg",
          subtitle:
            "World-class granite walls throughout the Valley. Guided climbs and lessons available for all levels.",
          href: "",
        },
        {
          title: "Mariposa Grove (Giant Sequoias)",
          imgSrc: "/images/yosemite/activities/mariposa-grove.jpg",
          subtitle:
            "Stroll among giant sequoias near the park’s south entrance. Big Trees Loop and Grizzly Giant trails.",
          href: "",
        },
        {
          title: "Raft the Merced River",
          imgSrc: "/images/yosemite/activities/merced-rafting.jpg",
          subtitle:
            "Seasonal rafting through Yosemite Valley with views of El Capitan and Yosemite Falls. Rentals when flows allow.",
          href: "",
        },
      ],
      lodging: [
        {
          title: "Yosemite Valley Lodge",
          imgSrc: "/images/yosemite/lodging/yv-lodge.jpg",
          subtitle:
            "Base in Yosemite Valley near Yosemite Falls. Classic lodge rooms, dining, and easy shuttle access to the Valley floor sights.",
          href: "https://www.travelyosemite.com/lodging/yosemite-valley-lodge/",
        },
        {
          title: "The Ahwahnee",
          imgSrc: "/images/yosemite/lodging/ahwahnee.jpg",
          subtitle:
            "Historic grand hotel with iconic dining room and Half Dome views. Premium lodging right in the Valley.",
          href: "https://www.travelyosemite.com/lodging/the-ahwahnee/",
        },
        {
          title: "Wawona Hotel",
          imgSrc: "/images/yosemite/lodging/wawona.jpg",
          subtitle:
            "Victorian-era charm near the Mariposa Grove. Quiet setting south of the Valley, porches and meadow views.",
          href: "https://www.travelyosemite.com/lodging/wawona-hotel/",
        },
      ],
      viewpoints: [
        {
          title: "Tunnel View",
          imgSrc: "/images/yosemite/viewpoints/tunnel-view.jpg",
          subtitle:
            "On Wawona Road just east of the tunnel. Classic vista of El Capitan, Bridalveil Fall, and Half Dome.",
          href: "",
        },
        {
          title: "Glacier Point",
          imgSrc: "/images/yosemite/viewpoints/glacier-point.jpg",
          subtitle:
            "At the end of Glacier Point Road. Panoramic overlook above Yosemite Valley with Half Dome front and center.",
          href: "",
        },
        {
          title: "Taft Point",
          imgSrc: "/images/yosemite/viewpoints/taft-point.jpg",
          subtitle:
            "Short hike from Glacier Point Road. Dramatic cliffs and fissures with sweeping westward Valley views.",
          href: "",
        },
      ],
    },
    zion: {
      activities: [
        {
          title: "Canyoneering",
          imgSrc: "/images/zion/activities/canyoneering.jpg",
          subtitle:
            "Guided slot-canyon adventures in Zion’s backcountry. Permits required for many technical routes.",
          href: "",
        },
        {
          title: "Cycling Zion Canyon",
          imgSrc: "/images/zion/activities/cycling.jpg",
          subtitle:
            "Ride the Scenic Drive when traffic is limited. Rent bikes in Springdale; shuttles carry bikes too.",
          href: "",
        },
        {
          title: "Scenic Shuttle Tour",
          imgSrc: "/images/zion/activities/scenic-shuttle.jpg",
          subtitle:
            "Hop-on, hop-off stops along Zion Canyon Scenic Drive. Great for viewpoints and short walks.",
          href: "",
        },
      ],
      lodging: [
        {
          title: "Zion Lodge",
          imgSrc: "/images/zion/lodging/zion-lodge.jpg",
          subtitle:
            "Inside Zion Canyon along the scenic drive. Cabins and lodge rooms with trail and shuttle access at your doorstep.",
          href: "https://www.zionlodge.com/",
        },
        {
          title: "Cable Mountain Lodge",
          imgSrc: "/images/zion/lodging/cable-mountain.jpg",
          subtitle:
            "At the park entrance in Springdale by the shuttle stop. Suites with kitchenettes and pool, easy canyon access.",
          href: "https://cablemountainlodge.com/",
        },
        {
          title: "Cliffrose Springdale",
          imgSrc: "/images/zion/lodging/cliffrose.jpg",
          subtitle:
            "Riverside resort feel in Springdale, a short walk to the park gate. Lush grounds and red rock views.",
          href: "https://www.cliffrosespringdale.com/",
        },
      ],
      viewpoints: [
        {
          title: "Canyon Overlook",
          imgSrc: "/images/zion/viewpoints/canyon-overlook.jpg",
          subtitle:
            "East side of the Zion-Mt. Carmel Tunnel on UT-9. Short trail to a wide view of lower Zion Canyon.",
          href: "",
        },
        {
          title: "Watchman (Canyon Junction Bridge)",
          imgSrc: "/images/zion/viewpoints/watchman.jpg",
          subtitle:
            "Near Canyon Junction Bridge on the Scenic Drive. Iconic sunset shot of the Watchman and Virgin River.",
          href: "",
        },
        {
          title: "Timber Creek Overlook",
          imgSrc: "/images/zion/viewpoints/timber-creek.jpg",
          subtitle:
            "Kolob Canyons section, at the end of Kolob Canyons Rd. Wide western views over red rock ridges.",
          href: "",
        },
      ],
    },
    channel: {
      activities: [
        {
          title: "Sea Kayaking & Caves",
          imgSrc: "/images/channel/activities/sea-kayaking.jpg",
          subtitle:
            "Paddle sea arches and caves (conditions permitting) near Santa Cruz and Anacapa Islands. Guided trips from Scorpion Anchorage.",
          href: "",
        },
        {
          title: "Snorkeling & Diving",
          imgSrc: "/images/channel/activities/snorkeling.jpg",
          subtitle:
            "Kelp forests and abundant marine life in the Channel Islands Marine Sanctuary. Best near Scorpion Anchorage and Landing Cove.",
          href: "",
        },
        {
          title: "Wildlife Watching",
          imgSrc: "/images/channel/activities/wildlife-watching.jpg",
          subtitle:
            "Look for whales, dolphins, sea lions, and island foxes; seabirds nest on cliffs. Best from boats and coastal trails.",
          href: "",
        },
      ],
      lodging: [
        {
          title: "Scorpion Canyon Campground",
          imgSrc: "/images/channel/lodging/scorpion-canyon.jpg",
          subtitle:
            "On Santa Cruz Island near Scorpion Anchorage. Island camping close to trails and kayak launches.",
          href: "https://www.nps.gov/chis/planyourvisit/camping.htm",
        },
        {
          title: "Anacapa Island Campground",
          imgSrc: "/images/channel/lodging/anacapa-campground.jpg",
          subtitle:
            "On Anacapa Island above the landing cove. Clifftop primitive sites with ocean panoramas.",
          href: "https://www.nps.gov/chis/planyourvisit/camping.htm",
        },
        {
          title: "Ventura Harbor Hotels",
          imgSrc: "/images/channel/lodging/ventura-harbor-hotels.jpg",
          subtitle:
            "On the mainland near Island Packers dock. Convenient stays before/after island boat trips.",
          href: "https://www.islandpackers.com/",
        },
      ],
      viewpoints: [
        {
          title: "Inspiration Point (Anacapa)",
          imgSrc: "/images/channel/viewpoints/inspiration-point2.jpg",
          subtitle:
            "On Anacapa Island near the western tip. Views of the sea arch and the chain of Channel Islands.",
          href: "",
        },
        {
          title: "Potato Harbor Overlook (Santa Cruz)",
          imgSrc: "/images/channel/viewpoints/potato-harbor.jpg",
          subtitle:
            "North coast of Santa Cruz Island, reached from Scorpion area trails. Turquoise cove and cliffs.",
          href: "",
        },
        {
          title: "Cavern Point (Santa Cruz)",
          imgSrc: "/images/channel/viewpoints/cavern-point.jpg",
          subtitle:
            "Clifftop near Scorpion Anchorage on Santa Cruz. Wide coastal views and marine wildlife spotting.",
          href: "",
        },
      ],
    },
  };

  const overlay = byPark[parkId];
  if (!overlay) return park;

  return {
    ...park,
    hikes: park.hikes ?? [],
    activities: overlay.activities ?? park.activities ?? [],
    lodging: overlay.lodging ?? park.lodging ?? [],
    viewpoints: overlay.viewpoints ?? park.viewpoints ?? [],
  };
}
