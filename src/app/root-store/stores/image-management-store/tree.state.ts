import { State, Selector, StateContext, Action, Store } from '@ngxs/store';
import {
	SetTreeNode,
	SetTreeNodeSuccess,
	CachedChildren,
	SetSaleshubSelectedNode,
	SetManuSelectedNode
} from './tree.action';

export const getTreeInitState = (): any => ({
	manuSelectedNode: null,
	saleshubSelectedNode: null,
	nodeList: [],
	cacheChildrenName: [],
	nodeLink: '',
	loading: false,
	loaded: false
});

export interface TreeNode {
	name: string;
	loading: string;
	children?: any[];
	images?: any;
}

export interface TreeNodeStateModel {
	manuSelectedNode: TreeNode;
	saleshubSelectedNode: TreeNode;
	cacheChildrenNames: string[];
	nodeList: TreeNode[];
	nodeLink: string;
	loading: boolean;
	loaded: boolean;
}

@State<TreeNodeStateModel>({
	name: 'TreeNodeState',
	defaults: getTreeInitState()
})
export class TreeNodeState {
	@Selector()
	static nodeList(state: TreeNodeStateModel) {
		return state.nodeList;
	}
	@Selector()
	static loading(state: TreeNodeStateModel) {
		return state.loading;
	}
	@Selector()
	static loaded(state: TreeNodeStateModel) {
		return state.loaded;
	}
	@Selector()
	static manuSelectedNode(state: TreeNodeStateModel) {
		return state.manuSelectedNode;
	}
	@Selector()
	static saleshubSelectedNode(state: TreeNodeStateModel) {
		return state.saleshubSelectedNode;
	}

	@Selector()
	static cacheChildrenNames(state: TreeNodeStateModel) {
		return state.cacheChildrenNames;
	}
	@Selector()
	static nodeLink(state: TreeNodeStateModel) {
		return state.nodeLink;
	}

	constructor(private store: Store) {}

	@Action(SetTreeNode)
	setTreeNode(
		{ patchState }: StateContext<TreeNodeStateModel>,
		{ payload }: SetTreeNode
	) {
		patchState({ loading: true });
		this.store.dispatch(new SetTreeNodeSuccess(payload));
	}

	@Action(SetTreeNodeSuccess)
	setTreeNodeSuccess(
		{ patchState }: StateContext<TreeNodeStateModel>,
		{ payload }: SetTreeNode
	) {
		patchState({
			nodeList: payload,
			loading: false,
			loaded: true
		});
	}

	@Action(SetManuSelectedNode)
	setManuSelectedNode(
		{ patchState }: StateContext<TreeNodeStateModel>,
		{ payload }: SetManuSelectedNode
	) {
		patchState({ manuSelectedNode: payload });
	}
	@Action(SetSaleshubSelectedNode)
	setSaleshubsSelectedNode(
		{ patchState }: StateContext<TreeNodeStateModel>,
		{ payload }: SetSaleshubSelectedNode
	) {
		patchState({ saleshubSelectedNode: payload });
	}

	@Action(CachedChildren)
	cachedChildred(
		{ patchState }: StateContext<TreeNodeStateModel>,
		{ payload }: CachedChildren
	) {
		patchState({ cacheChildrenNames: payload });
	}
}
