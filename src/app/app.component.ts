import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  imageUrl: string | undefined;

  constructor(
    private http: HttpClient
  ) {

  }
  
  onInputChange(event: any) {
    const file: File = event.target.files[0];

    const formData = new FormData();
    formData.append('file', file, 'filename');
    this.http.post<{ name: string; }>(`http://localhost:3001/upload`, formData).subscribe(result => {
      this.imageUrl = `http://localhost:3001/${result.name}`
    });
  }

}
