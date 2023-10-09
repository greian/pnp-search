import * as React from 'react';
import { IFieldValueItem } from '../../../../common/models/IFieldValueItem';

export interface IFieldValueComponentProps {
  fieldItem: IFieldValueItem;
  fieldValue: any;
}

const FieldValueComponent: React.FunctionComponent<IFieldValueComponentProps> = props => {

  const { fieldItem, fieldValue } = props;

  switch (fieldItem.fieldType) {
    case 'Hyperlink':
      return <>
      {fieldValue ? <>
        {fieldItem.fieldLabel ? <strong>{fieldItem.fieldLabel}</strong> : <></>}
        <br /><a href={fieldValue.Url}>{fieldValue.Description}</a>
      </> : <></>}
      </>;

    case 'User':
      return <></>;

    case 'DateTime':
      break;

    case 'Lookup':
      break;

    case 'TaxonomyFieldType':
      console.log('TaxonomyFieldType', fieldValue);
      break;

    default:
      return <>{fieldValue}</>;
  }

}

export default FieldValueComponent;

