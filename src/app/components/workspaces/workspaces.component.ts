import { Component, OnInit, Input } from '@angular/core';
import Workspace from '../../services/workspace';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.scss']
})
export class WorkspacesComponent implements OnInit {

  currentWorkspace;
  workspaceList;

  constructor(private workspace: Workspace, private route: ActivatedRoute) { 
    this.workspace.currentWorkspaceId.subscribe(id => {
      this.currentWorkspace = id
    })

    this.workspaceList = this.workspace.getAllWorkspaces();

    this.route.paramMap.subscribe(
      (params: ParamMap) => 
        this.workspace.currentWorkspaceId.next(+params.get('id'))
    );
  }

  ngOnInit(): void {
  }

  onClickIdWorkspace(idWorkspace) {
    this.workspace.currentWorkspaceId.next(idWorkspace)
    
  }

}
