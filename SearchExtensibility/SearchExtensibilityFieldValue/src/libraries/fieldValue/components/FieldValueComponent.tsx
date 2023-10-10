import * as React from 'react';
import { IFieldValueItem } from '../../../common/models';

export interface IFieldValueComponentProps {
  fieldItem: IFieldValueItem;
  fieldValue: any;
}

const FieldValueComponent: React.FunctionComponent<IFieldValueComponentProps> = props => {

  const { fieldItem, fieldValue } = props;

  // Declare output element
  let outputElement: JSX.Element = <></>;

  if (!fieldItem || !fieldValue) {
    outputElement = <></>;
  } else {

    // Render the field value based on the field type
    switch (fieldItem.fieldType) {
      case 'Hyperlink':
        outputElement = <>
          {fieldValue ? <>
            {fieldItem.fieldLabel ? <strong>{fieldItem.fieldLabel}</strong> : <></>}
            <br /><a href={fieldValue.Url}>{fieldValue.Description}</a>
          </> : <></>}
        </>;
        break;

      case 'User':
        outputElement = <>{fieldValue}</>;
        break;

      case 'DateTime':
        outputElement = <>{fieldValue}</>;
        break;

      case 'Lookup':
        outputElement = <>{fieldValue}</>;
        break;

      case 'TaxonomyFieldType':
        outputElement = <>{fieldValue.Label}</>;
        console.log('TaxonomyFieldType', fieldValue);
        break;

      default:
        outputElement = <>{fieldValue}</>;
        break;
    }
  }

  return outputElement;

}

export default FieldValueComponent;

