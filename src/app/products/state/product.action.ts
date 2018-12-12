import {Action} from "@ngrx/store"
import { from } from "rxjs";
export enum productActionType {
  Load = "[Product] Load";
}
export class LoadProducts implements Action{
  readonly type productActionType.Load;
};
