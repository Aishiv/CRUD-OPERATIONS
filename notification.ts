import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class Notification
{
    constructor(public toastr: ToastrService) { }

    showSuccess(msg: string) {
     this.toastr.success(msg, 'Success!');
    }
  
    showError(msg: string) {
       this.toastr.error(msg, 'Error!');
    }
  
    showWarning(msg: string) {
      this.toastr.warning(msg, 'Warning!');
    }
  
    showInfo(msg: string) {
      this.toastr.info(msg, 'Info');
    }
  }