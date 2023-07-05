public with sharing class AccountController {
    @AuraEnabled(cacheable=true) /*métodos anotados com @AuraEnabled(cacheable=true) para que os resultados 
    sejam armazenados em cache.*/
    public static List<Account> getAccounts() {/*definimos o método getAccounts no Apex para realizar uma 
        operação de leitura e recuperar contas existentes.*/
        throw new AuraHandledException('Forced error');
        /*return [
            SELECT Name, AnnualRevenue, Industry
            FROM Account
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];*/
    }
}