import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountriesJson } from 'src/assets/JSON/countries-json';

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.scss']
})
export class ApplyNowComponent implements OnInit {
  
  firstName:string='';
  lastName:string='';
  userName:string='';
  public gender:string='Other';
  countryList=CountriesJson["countries"];
  nationality = new FormControl('', Validators.required);
  form: FormGroup | undefined;
  showFirst:boolean=true;
  showSecond:boolean=false;
  showThird:boolean=false;
  showFourth:boolean=false;
  showFifth:boolean=false;
  showSixth:boolean=false;
  showSeventh:boolean=false;
 frmGroup:any={};
  constructor(private _formBuilder :FormBuilder,private country:CountriesJson) { }
 
  ngOnInit(): void {
    this.frmGroup={};
    this.form = new FormGroup({
      firstName : new FormControl(),
      lastName : new FormControl(),
      userName : new FormControl(),
      gender : new FormControl(),
      nationality: new FormControl(),
      residence: new FormControl(),
      contact: new FormControl(),
      email: new FormControl()
    })
    this.countryList = this.country.countries;
    //console.log('countryList :: ' + this.countryList);
    this.frmGroup['firstName'] = new FormControl('',Validators.required);
    this.frmGroup['lastName'] = new FormControl('',Validators.required);
    this.frmGroup['userName'] = new FormControl('',Validators.required);
    this.frmGroup['gender'] = new FormControl('Other',Validators.required);
    this.frmGroup['nationality'] = new FormControl('',Validators.required);
    this.frmGroup['residence'] = new FormControl('',Validators.required);
    this.frmGroup['contact'] = new FormControl('',Validators.required);
    this.frmGroup['email'] = new FormControl('',Validators.required);
    this.frmGroup['visited'] = new FormControl('',Validators.required);
    this.frmGroup['family'] = new FormControl('',Validators.required);
    this.frmGroup['stay'] = new FormControl('',Validators.required);
    this.frmGroup['whydubai'] = new FormControl('',Validators.required);
    this.frmGroup['industry'] = new FormControl('',Validators.required);
    this.frmGroup['education'] = new FormControl('',Validators.required);
    this.form = this._formBuilder.group(this.frmGroup);
  }
  goToFirst(){
    this.showFirst = true;
    this.showSecond = false;
    this.showThird = false;
    this.showFourth = false;
    this.showFifth = false;
    this.showSixth = false;
    this.showSeventh = false;
  }
  goToSecond(){
    this.showFirst = false;
    this.showSecond = true;
    this.showThird = false;
    this.showFourth = false;
    this.showFifth = false;
    this.showSixth = false;
    this.showSeventh = false;
  }

  goToThird(){
    this.showFirst = false;
    this.showSecond = false;
    this.showThird = true;
    this.showFourth = false;
    this.showFifth = false;
    this.showSixth = false;
    this.showSeventh = false;
    
  }

  goToFourth(){
    this.showFirst = false;
    this.showSecond = false;
    this.showThird = false;
    this.showFourth = true;
    this.showFifth = false;
    this.showSixth = false;
    this.showSeventh = false;
  }

  goToFifth(){
    this.showFirst = false;
    this.showSecond = false;
    this.showThird = false;
    this.showFourth = false;
    this.showFifth = true;
    this.showSixth = false;
    this.showSeventh = false;
  }

  goToSixth(){
    this.showFirst = false;
    this.showSecond = false;
    this.showThird = false;
    this.showFourth = false;
    this.showFifth = false;
    this.showSixth = true;
    this.showSeventh = false;
    console.log(this.frmGroup);
  }

 

}
