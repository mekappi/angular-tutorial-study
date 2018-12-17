import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HelloButtonComponent } from './hello-button/hello-button.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroNameComponent } from './hero-name/hero-name.component';
import { SpyDirective } from './spy.directive';
import { HighlightDirective } from './highlight.directive';
import { MessageHighlightDirective } from './message-highlight.directive';
import { MessageCustomPipe } from './message-custom.pipe';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ForbiddenValidatorDirective } from 'src/shared/forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from 'src/shared/identity-revealed.directive';
import { UniqueAlterEgoDirective } from 'src/shared/some-async.directive';
import { ObservableTestComponent } from './observable-test/observable-test.component';
import { HttpTestComponent } from './http-test/http-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    MessagesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    HelloButtonComponent,
    HeroParentComponent,
    HeroChildComponent,
    HeroNameComponent,
    SpyDirective,
    HighlightDirective,
    MessageHighlightDirective,
    MessageCustomPipe,
    NameEditorComponent,
    ProfileEditorComponent,
    HeroFormComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective,
    UniqueAlterEgoDirective,
    ObservableTestComponent,
    HttpTestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

