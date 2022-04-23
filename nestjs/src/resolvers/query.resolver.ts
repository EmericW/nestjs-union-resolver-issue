import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Query')
export class QueryResolver {
  @Query()
  async items() {
    console.log('Query resolver called');
    return [
      {
        title: 'Meditations',
        pages: 350,
      },
      {
        title: 'The Batman',
        duration: 176,
      },
    ];
  }
}
