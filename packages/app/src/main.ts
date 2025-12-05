import { Auth, define, History, Switch, Store } from "@calpoly/mustang";
import { html } from "lit";
import { ParksHeaderElement } from "./components/parks-header";
import { HomeViewElement } from "./views/home-view";
import { ParkViewElement } from "./views/park-view";
import { ParkEditViewElement } from "./views/park-edit";
import { ParkGridElement } from "./components/park-grid";
import { ParkCardElement } from "./components/park-card";
import { Model, init } from "./model";
import { Msg } from "./messages";
import update from "./update";

const routes = [
  {
    path: "/app/park/:parkId/edit",
    view: (params: Switch.Params) => html`
      <park-edit park-id=${params.parkId}></park-edit>
    `,
  },
  {
    path: "/app/park/:parkId",
    view: (params: Switch.Params) => html`
      <park-view park-id=${params.parkId}></park-view>
    `,
  },
  {
    path: "/app",
    view: () => html` <home-view></home-view> `,
  },
  {
    path: "/",
    redirect: "/app",
  },
];

define({
  "mu-auth": Auth.Provider,
  "mu-history": History.Provider,
  "mu-store": class AppStore extends Store.Provider<Model, Msg> {
    constructor() {
      super(update, init, "parks:auth");
    }
  },
  "mu-switch": class AppSwitch extends Switch.Element {
    constructor() {
      super(routes, "parks:history", "parks:auth");
    }
  },
  "parks-header": ParksHeaderElement,
  "home-view": HomeViewElement,
  "park-view": ParkViewElement,
  "park-edit": ParkEditViewElement,
  "park-grid": ParkGridElement,
  "park-card": ParkCardElement,
});
