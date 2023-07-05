import { LightningElement, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import { refreshApex } from '@salesforce/apex';
import NAME_FIELD from '@salesforce/schema/Account.Name';//importamos referências de campo
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';//importamos referências de campo
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';//importamos referências de campo
import getAccounts from '@salesforce/apex/AccountController.getAccounts';//importamos a função getAccounts da classe AccountController.
const COLUMNS = [
    { label: 'Account Name', fieldName: NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Annual Revenue', fieldName: REVENUE_FIELD.fieldApiName, type: 'currency' },
    { label: 'Industry', fieldName: INDUSTRY_FIELD.fieldApiName, type: 'text' }
];
export default class AccountList extends LightningElement {
    columns = COLUMNS;
    @wire(getAccounts)//usamos @wire com a função getAccounts para recuperar os dados.
    accounts;/*armazenamos o resultado na propriedade accounts. Se a operação for bem-sucedida, 
    os registros podem ser acessados em accounts.data. Se não for, o erro aparecerá em accounts.error.*/
    get errors() {
        return (this.accounts.error) ?
            reduceErrors(this.accounts.error) : [];
    }
    handleRefresh() {
        refreshApex(this.accounts);
    }
}
