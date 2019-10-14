/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-10-12 09:29:28
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpreadSheetsModule } from 'src/assets/plugin/spread/gc.spread.sheets.angular';
import { FccomponentModule } from 'src/fccomponents/fccomponent.module';
import { SharedModule } from 'src/shared';
import { FcantdComponent } from './fcantd/fcantd.component';
import { Fcg2Component } from './fcchart/fcg2/fcg2.component';
import { Routers } from './fcdemo.route';
import { FciconComponent } from './fcicon/fcicon.component';
import { FciframeComponent } from './fciframe/fciframe.component';
import { FcspreadComponent } from './fcspread/fcspread.component';
import { FctableComponent } from './fctable/fctable.component';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
    SpreadSheetsModule,
    FccomponentModule
  ],
  declarations: [
    FcspreadComponent, // spread报表
    FctableComponent, // 表格
    FciframeComponent, // iframe
    Fcg2Component, // 图表
    FcantdComponent,
    FciconComponent
  ],
  providers: []
})
export class FcdemoModule { }
