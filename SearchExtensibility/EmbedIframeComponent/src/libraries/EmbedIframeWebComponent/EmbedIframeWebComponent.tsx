import { BaseWebComponent } from "@pnp/modern-search-extensibility";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { EmbedIframeComponent } from "./EmbedIframeComponent";

export class EmbedIframeWebComponent extends BaseWebComponent {

  public async connectedCallback(): Promise<void> {

    const props = this.resolveAttributes();

    this._serviceScope.whenFinished(async () => {

      if (props.taskSiteUrl && props.taskListId && props.taskItemId) {
        const customComponent = <EmbedIframeComponent url={props.url} />;
        ReactDOM.render(customComponent, this);
      }
    });
  }
 // ListItemID, SPSiteUrl, ListId
}
