import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { environment } from '@env/environment';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { NgModule } from '@angular/core';

const uri = environment.graphQLURL;
export function createApollo(httpLink: HttpLink) {
  return {
    cache: new InMemoryCache({
      addTypename: false,
    }),
    link: httpLink.create({ uri }),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      deps: [HttpLink],
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
    },
  ],
})
export class GraphQLModule {}
