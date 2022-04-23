import { ResolveField, Resolver } from '@nestjs/graphql';

@Resolver('ResultItem')
export class ResultItemResolver {
  @ResolveField()
  __resolveType(value) {
    console.log('Union resolver called');
    if (value.name) {
      return 'Author';
    }
    if (value.title) {
      return 'Book';
    }
    return null;
  }
}
