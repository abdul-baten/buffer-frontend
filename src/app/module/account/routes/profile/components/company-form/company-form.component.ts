import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICountry, IDropdown } from 'src/app/core/model';

@Component({
  selector: 'buffer-company-form',
  styleUrls: ['./company-form.component.css'],
  templateUrl: './company-form.component.html'
})
export class CompanyFormComponent {
  form: FormGroup;
  countries: ICountry[] = [{ name: 'Bangladesh' }, { name: 'India' }, { name: 'Pakistan' }];
  company_size_options: IDropdown[] = [
    {
      label: 'Fewer than 5 employees',
      value: 'lessThan5'
    },
    {
      label: '5 to 50 employees',
      value: '5To50'
    },
    {
      label: '51 to 500 employees',
      value: '51To500'
    },
    {
      label: 'More than 500 employees',
      value: 'moreThan500'
    }
  ];

  business_type_options: IDropdown[] = [
    {
      label: 'Publisher (e.g. newspaper, magazine, blogger)',
      value: 'publisher'
    },
    {
      label: 'Direct-to-consumer brand (e.g. online store)',
      value: 'onlineStore'
    },
    {
      label: 'Personal use (i.e. not a business)',
      value: 'personal'
    },
    {
      label: 'Agency/marketing consultant',
      value: 'agency'
    },
    {
      label: 'SaaS (software as a service)',
      value: 'saas'
    },
    {
      label: 'Physical store or location (e.g. retail store, cafe)',
      value: 'physicalStore'
    },
    {
      label: 'B2B online brand',
      value: 'b2b'
    }
  ];

  user_industry_options: IDropdown[] = [
    {
      label: 'Advertising and Public Relations',
      value: 'lessThan5'
    },
    {
      label: 'Agro Industries',
      value: '5To50'
    },
    {
      label: 'Banking, Finance and Insurance',
      value: '51To500'
    },
    {
      label: 'Construction',
      value: 'moreThan500'
    },

    {
      label: 'Educational',
      value: 'moreThan500'
    },

    {
      label: 'Energy and Utilities',
      value: 'moreThan500'
    },

    {
      label: 'Hotels, Leisure and Entertainment',
      value: 'moreThan500'
    },

    {
      label: 'Information Technology',
      value: 'moreThan500'
    },

    {
      label: 'Manufacturing',
      value: 'moreThan500'
    },

    {
      label: 'Media and Telecommunications',
      value: 'moreThan500'
    },

    {
      label: 'Non-profit organizations',
      value: 'moreThan500'
    },

    {
      label: 'Other',
      value: 'moreThan500'
    },

    {
      label: 'Public sector',
      value: 'moreThan500'
    },

    {
      label: 'Publishing, Printing and Photographic Services',
      value: 'moreThan500'
    },

    {
      label: 'Retail/Wholesale Trade',
      value: 'moreThan500'
    },

    {
      label: 'Tourism and Travel',
      value: 'moreThan500'
    },

    {
      label: 'Transportation',
      value: 'moreThan500'
    }
  ];

  constructor (private formBuilder: FormBuilder) {
    this.form = this.buildProfileChangeEmailForm();
  }

  private buildProfileChangeEmailForm (): FormGroup {
    return this.formBuilder.group({
      user_business_type: ['', Validators.required],
      user_company_name: [''],
      user_company_size: [''],
      user_industry: ['', Validators.required]
    });
  }
}
