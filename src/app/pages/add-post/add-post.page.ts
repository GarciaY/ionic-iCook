import { Component,Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {

  public myForm: FormGroup;
  private playerCount: number = 1;

  constructor(private http: HttpClient,
    @Inject(DOCUMENT) private document: Document, private formBuilder: FormBuilder) { 

      this.myForm = formBuilder.group({
        player1: ['', Validators.required]
      });
    }

    public customFormatter(value: number) {
      return '$(value)%'
    }
    addControl(){
      this.playerCount++;
      this.myForm.addControl('player' + this.playerCount, new FormControl('', Validators.required));
    }
    removeControl(control){
      this.myForm.removeControl(control.key);
    }
  ngOnInit() {
  }

}
