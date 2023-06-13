import * as React from 'react';
import { BaseWebComponent } from '@pnp/modern-search-extensibility';
import * as ReactDOM from 'react-dom';

export interface IEmbedIframeComponentProps {
  url: string;
  width?: string;
  height?: string;

}

export interface IEmbedIframeComponenState {
}

export class EmbedIframeComponent extends React.Component<IEmbedIframeComponentProps, IEmbedIframeComponenState> {

  public render(): React.ReactElement<IEmbedIframeComponentProps> {

    const { url, width, height } = this.props;

    return <div>
      <iframe src={url} width={width ? width : '100%'} height={height ? height : '600px' } frameBorder={0}
        allowFullScreen allowTransparency={true}
        style={{
          inset: '0px', visibility: 'visible', backgroundColor: 'transparent',
          zIndex: 1000, willChange: 'opacity', opacity: 1
        }} />
    </div>;
  }
}

