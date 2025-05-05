import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-tambahcustomer',
  templateUrl: './tambahcustomer.page.html',
  styleUrls: ['./tambahcustomer.page.scss'],
  standalone:false,
})
export class TambahcustomerPage implements OnInit {

  constructor(private dataservice: DataserviceService) { }

  ngOnInit() {
  }

  new_nama = '';
  new_pengirim ='';
  new_jenis_pesanan ='';

  submitcust()
{
//this.foodservice.addPasta(this.new_name,this.new_url,this.new_desc,this.new_price)
   this.dataservice.addCustomer(this.new_nama,            
      this.new_pengirim,this.new_jenis_pesanan).subscribe((response: any) => {
        if(response.result==='success'){
          alert("success")
        }
        else
        {
          alert(response.message)
        }
   });}


}
