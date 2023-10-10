import * as React from 'react';
import { IFieldValueItem } from '../../../../common/models/IFieldValueItem';

export interface IFieldValueComponentProps {
  fieldItem: IFieldValueItem;
  fieldValue: any;
}

const FieldValueComponent: React.FunctionComponent<IFieldValueComponentProps> = props => {

  const { fieldItem, fieldValue } = props;

  var x: JSX.Element = <></>;

  if (!fieldItem || !fieldValue) {
    x = <></>;
  } else {

    switch (fieldItem.fieldType) {
      case 'Hyperlink':
        x = <>
          {fieldValue ? <>
            {fieldItem.fieldLabel ? <strong>{fieldItem.fieldLabel}</strong> : <></>}
            <br /><a href={fieldValue.Url}>{fieldValue.Description}</a>
          </> : <></>}
        </>;
        break;

      case 'User':
        x = <>{fieldValue}</>;
        break;

      case 'DateTime':
        x = <>{fieldValue}</>;
        break;

      case 'Lookup':
        x = <>{fieldValue}</>;
        break;

      case 'TaxonomyFieldType':
        x = <>{fieldValue.Label}</>;
        console.log('TaxonomyFieldType', fieldValue);
        break;

      default:
        x = <>{fieldValue}</>;
        break;
    }
  }

  return x;

}

export default FieldValueComponent;

