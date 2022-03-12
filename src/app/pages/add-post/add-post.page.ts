import { Component,Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {

  constructor(private http: HttpClient,
    @Inject(DOCUMENT) private document: Document) { }

    public customFormatter(value: number) {
      return '$(value)%'
    }

  ngOnInit() {
  }

}
