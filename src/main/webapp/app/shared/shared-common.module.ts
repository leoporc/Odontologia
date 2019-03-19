import { NgModule } from '@angular/core';

import { OdontologiaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [OdontologiaSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [OdontologiaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class OdontologiaSharedCommonModule {}
