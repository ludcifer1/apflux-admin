import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TreeNodeService } from '@app/core/services/tree-node.service';
import { tap } from 'rxjs/operators';
import {
	TreeNodeState,
	TreeNode
} from '../stores/image-management-store/tree.state';
import {
	SetTreeNode,
	SetManuSelectedNode,
	SetSaleshubSelectedNode
} from '../stores/image-management-store/tree.action';
import {
	TreeSetting,
	ImageUploadSetting
} from '@app/shared/models/settings.model';
import { TEXT } from '@app/shared/constants';

export class TreeManagementStoreService {
	@Select(TreeNodeState.loading) treeNodeLoading$: Observable<any>;
	@Select(TreeNodeState.loaded) treeNodeLoaded$: Observable<any>;
	@Select(TreeNodeState.nodeList) treeNodeList$: Observable<any>;
	@Select(TreeNodeState.cacheChildrenNames)
	cacheChildrenNames$: Observable<any>;
	@Select(TreeNodeState.manuSelectedNode)
	treeManuSelectedNode$: Observable<any>;
	@Select(TreeNodeState.saleshubSelectedNode)
	treeSaleshubSelectedNode$: Observable<any>;

	constructor(private store: Store, private treeNodeService: TreeNodeService) {}

	getTreeLoading() {
		return this.treeNodeLoading$;
	}
	getTreeLoaded() {
		return this.treeNodeLoaded$;
	}
	getTreeNodeList() {
		return this.treeNodeList$;
	}
	getManuSelectedNode() {
		return this.treeManuSelectedNode$;
	}
	getSaleshubSelectedNode() {
		return this.treeSaleshubSelectedNode$;
	}

	setSelectedNodetoState(data: any, setting: TreeSetting | ImageUploadSetting) {
		if (setting.type) {
			const type = setting.type;
			switch (type) {
				case TEXT.COMMON.MANUFACTURER:
					this.store.dispatch(new SetManuSelectedNode(data));
					break;
				case TEXT.COMMON.SALESHUB:
					this.store.dispatch(new SetSaleshubSelectedNode(data));
			}
		}
	}

	setTreeToState(data: any) {
		this.store.dispatch(new SetTreeNode(data));
	}

	getAllTreeData(setting: TreeSetting) {
		return this.treeNodeService.getAllTreeData(setting).pipe(
			tap((res: any) => {
				if (res) {
					this.store.dispatch(new SetTreeNode(res));
				}
			})
		);
	}

	getTreeNodebyParentId(rootId: string, path: string, setting: TreeSetting) {
		return this.treeNodeService.getTreeNodebyParentId(rootId, path, setting);
	}
	getBrandbyParentId(rootId: string, path: string) {
		return this.treeNodeService.getBrandbyParentId(rootId, path);
	}
	// ================================================
	// =                                              =
	// ================================================
}
