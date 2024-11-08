import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiModule } from './ui/ui.module';

import { AdminModule } from './admin/admin.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UiModule, AdminModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CleanBlogApp';
}
