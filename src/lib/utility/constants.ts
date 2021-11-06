export enum EVENTS {
	INTERACTION_DENIED = 'interactionDenied',
	INTERACTION_ERROR = 'interactionError',
	INTERACTION_FINISH = 'interactionFinish',
	INTERACTION_RUN = 'interactionRun',
	INTERACTION_SUCCESS = 'interactionSuccess',
	UNKNOWN_INTERACTION = 'unknownInteraction'
}

export enum TASK_RESULT {
	ONE_AND_DONE,
	REPEAT
}