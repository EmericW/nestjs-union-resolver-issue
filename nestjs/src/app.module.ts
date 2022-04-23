import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { QueryResolver } from './resolvers/query.resolver';
import { ResultItemResolver } from './resolvers/result-item.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // mockEntireSchema: false,
      typePaths: ['./**/schema.graphql'],
    }),
  ],
  controllers: [],
  providers: [QueryResolver, ResultItemResolver],
})
export class AppModule {}
