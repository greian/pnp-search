import { BaseWebComponent } from "@pnp/modern-search-extensibility";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { EmbedIframeComponent } from "./EmbedIframeComponent";

export class EmbedIframeWebComponent extends BaseWebComponent {

  public constructor() {
    super();
  }

  public async connectedCallback(): Promise<void> {
    const props = this.resolveAttributes();
    const embedComponent = <EmbedIframeComponent url={props.url} width={props.width} height={props.height} />;
    ReactDOM.render(embedComponent, this);
  }

}
