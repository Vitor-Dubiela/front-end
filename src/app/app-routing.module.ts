import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarComponent } from "./components/views/cadastrar/cadastrar.component";
import { ExcluirComponent } from "./components/views/excluir/excluir.component";
import { ListarComponent } from "./components/views/listar/listar.component";

const routes : Routes = [
    {
        path: '',
        component: ListarComponent
    }, 
    {
        path: 'ciclo/cadastrar',
        component: CadastrarComponent
    },
    {
        path: 'ciclo/excluir',
        component: ExcluirComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
