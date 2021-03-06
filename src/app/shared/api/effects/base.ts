/* tslint:disable */
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';
import { Actions } from '@ngrx/effects';
import { resolver } from './resolver';
import { LoopbackAction } from '../models/BaseModels';
import { LoopbackErrorActions } from '../actions/error';

/**
 * @module BaseLoopbackEffects
 * @author João Ribeiro <@JonnyBGod> <github:JonnyBGod>
 * @license MIT
 * @description
 * Abstract class that will be implemented in every custom effects automatically built
 * by the sdk builder.
 * It provides the core actions for each model to interact with API
 **/
export class BaseLoopbackEffects {
  public create$ = this.actions$
    .ofType(this.actionTypes.CREATE)
    .mergeMap((action: LoopbackAction) =>
      this.apiService.create(action.payload)
        .map((response: any) => new this.actions.createSuccess(response, action.meta))
        .catch((error: any) => concat(
          of(new this.actions.createFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  public createMany$ = this.actions$
    .ofType(this.actionTypes.CREATE_MANY)
    .mergeMap((action: LoopbackAction) =>
      this.apiService.createMany(action.payload)
        .map((response: any) => new this.actions.createManySuccess(response, action.meta)) // TODO: response?
        .catch((error: any) => concat(
          of(new this.actions.createManyFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  public findById$ = this.actions$
    .ofType(this.actionTypes.FIND_BY_ID)
    .mergeMap((action: LoopbackAction) =>
      this.apiService.findById(action.payload.id, action.payload.filter)
        .mergeMap((response: any) => resolver({data: response, meta: action.meta}, this.modelName, 'findByIdSuccess'))
        .catch((error: any) => concat(
          of(new this.actions.findByIdFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  public find$ = this.actions$
    .ofType(this.actionTypes.FIND)
    .mergeMap((action: LoopbackAction) =>
      this.apiService.find(action.payload)
        .mergeMap((response: any) => resolver({data: response, meta: action.meta}, this.modelName, 'findSuccess'))
        .catch((error: any) => concat(
          of(new this.actions.findFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  public findOne$ = this.actions$
    .ofType(this.actionTypes.FIND_ONE)
    .mergeMap((action: LoopbackAction) =>
      this.apiService.findOne(action.payload)
        .mergeMap((response: any) => resolver({data: response, meta: action.meta}, this.modelName, 'findOneSuccess'))
        .catch((error: any) => concat(
          of(new this.actions.findOneFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  public updateAll$ = this.actions$
    .ofType(this.actionTypes.UPDATE_ALL)
    .mergeMap((action: LoopbackAction) =>
      this.apiService.updateAll(action.payload.where, action.payload.data)
        .map((response: any) => new this.actions.updateAllSuccess(response, action.meta)) // TODO: response?
        .catch((error: any) => concat(
          of(new this.actions.updateAllFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  public deleteById$ = this.actions$
    .ofType(this.actionTypes.DELETE_BY_ID)
    .mergeMap((action: LoopbackAction) =>
      this.apiService.deleteById(action.payload)
        .map(() => new this.actions.deleteByIdSuccess(action.payload, action.meta))
        .catch((error: any) => concat(
          of(new this.actions.deleteByIdFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  public updateAttributes$ = this.actions$
    .ofType(this.actionTypes.UPDATE_ATTRIBUTES)
    .mergeMap((action: LoopbackAction) =>
      this.apiService.updateAttributes(action.payload.id, action.payload.data)
        .map((response: any) => new this.actions.updateAttributesSuccess(response, action.meta))
        .catch((error: any) => concat(
          of(new this.actions.updateAttributesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  public upsert$ = this.actions$
    .ofType(this.actionTypes.UPSERT)
    .mergeMap((action: LoopbackAction) =>
      this.apiService.upsert(action.payload)
        .map((response: any) => new this.actions.upsertSuccess(response, action.meta))
        .catch((error: any) => concat(
          of(new this.actions.upsertFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  public upsertWithWhere$ = this.actions$
    .ofType(this.actionTypes.UPSERT_WITH_WHERE)
    .mergeMap((action: LoopbackAction) =>
      this.apiService.upsertWithWhere(action.payload.where, action.payload.data)
        .map((response: any) => new this.actions.upsertWithWhereSuccess(response, action.meta))
        .catch((error: any) => concat(
          of(new this.actions.upsertWithWhereFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  public replaceOrCreate$ = this.actions$
    .ofType(this.actionTypes.REPLACE_OR_CREATE)
    .mergeMap((action: LoopbackAction) =>
      this.apiService.replaceOrCreate(action.payload)
        .map((response: any) => new this.actions.replaceOrCreateSuccess(response, action.meta))
        .catch((error: any) => concat(
          of(new this.actions.replaceOrCreateFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  public replaceById$ = this.actions$
    .ofType(this.actionTypes.REPLACE_BY_ID)
    .mergeMap((action: LoopbackAction) =>
      this.apiService.replaceById(action.payload.id, action.payload.data)
        .map((response: any) => new this.actions.replaceByIdSuccess(response, action.meta))
        .catch((error: any) => concat(
          of(new this.actions.replaceByIdFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  public patchOrCreate$ = this.actions$
    .ofType(this.actionTypes.PATCH_OR_CREATE)
    .mergeMap((action: LoopbackAction) =>
      this.apiService.patchOrCreate(action.payload)
        .map((response: any) => new this.actions.patchOrCreateSuccess(response, action.meta))
        .catch((error: any) => concat(
          of(new this.actions.patchOrCreateFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  public patchAttributes$ = this.actions$
    .ofType(this.actionTypes.PATCH_ATTRIBUTES)
    .mergeMap((action: LoopbackAction) =>
      this.apiService.patchAttributes(action.payload.id, action.payload.data)
        .map((response: any) => new this.actions.patchAttributesSuccess(response, action.meta))
        .catch((error: any) => concat(
          of(new this.actions.patchAttributesFail(error, action.meta)),
          of(new LoopbackErrorActions.error(error, action.meta))
        ))
    );

  constructor(
    public actions$: Actions,
    public apiService: any,
    public modelName: string,
    public actionTypes: any,
    public actions: any
  ) {}
}
