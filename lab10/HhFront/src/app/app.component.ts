import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Company} from "./models";
import {CompanyService} from "./company.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Angular+Django app!';
  companies: Company[] = [];
  newCompany: Company = {
    id: 0,
    name: '',
    description: '',
    city: '',
    address: ''
  };

  constructor(private companyService: CompanyService) {

  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getCompanies().subscribe((data) => {
      console.log(data)
      this.companies = data;
    });
  }

  addCompany() {
    if (this.newCompany.name && this.newCompany.description && this.newCompany.city && this.newCompany.address) {
      this.companyService
        .createCompany(
          this.newCompany.name,
          this.newCompany.description,
          this.newCompany.city,
          this.newCompany.address
        )
        .subscribe((data) => {
          console.log(data);
          this.getCompanies();  // обновляем список компаний после добавления новой
        });
    } else {
      alert("Please, enter all company details");
    }
  }


}
