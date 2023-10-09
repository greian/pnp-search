import { IItemActionList } from "rv-spfx-controls";
import { IDataService } from "./IDataService";


export class ExtensionHelpers {

  public static getSecurityTrimmedActions = async (actions: IItemActionList, dataService: IDataService, listName: string) => {
    // Check if the user has permissions to edit items in the chosen list
    const doesUserHavePermissions = await dataService.getUserPermissions(listName);

    if (!doesUserHavePermissions) {
      const permissionFilteredActions = actions.actions.slice(0).filter(x => x.actionType === 'ItemPageLink');
      const actionsIconName = actions.actionsIconName;

      actions = {
        actions: permissionFilteredActions,
        actionsIconName: actionsIconName
      }
    }
    return actions;
  }


}
