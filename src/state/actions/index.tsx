import { ActionType } from "../action-types";

interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRespositoriesSuccess {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

interface SearchRepositoriesError {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

export type Action =
    | SearchRepositoriesAction
    | SearchRespositoriesSuccess
    | SearchRepositoriesError;
