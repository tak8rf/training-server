yarn abr &&\
yarn codegen &&\
# adminの無駄なコード削除
sed -i -e '/scalar AWS/d' ./resources/appsync/admin/schema.graphql &&\
sed -i -e '/^$/d' ./resources/appsync/admin/schema.graphql &&\
rm ./resources/appsync/admin/schema.graphql-e &&\
# userの無駄なコード削除
sed -i -e '/scalar AWS/d' ./resources/appsync/user/schema.graphql &&\
sed -i -e '/^$/d' ./resources/appsync/user/schema.graphql &&\
rm ./resources/appsync/user/schema.graphql-e &&\
sls deploy