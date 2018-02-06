export function createActionTypes (actionTypes) {
  let actionTypesMap = {};
  actionTypes.forEach((actionType) => {
    actionTypesMap[actionType] = actionType;
  });
  return actionTypesMap;
}