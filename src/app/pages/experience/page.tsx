import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function About() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="/pages/experience">Experiências</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4">
                    <div className="min-h-[50vh] flex-1 rounded-xl bg-stone-600 border md:min-h-min">
                        <p className="p-4 flex flex-row justify-center">
                            EXPERIÊNCIAS EM ESTÁGIOS OU PROJETOS RELEVANTES
                        </p>
                        <div className="p-4 grid auto-rows-min gap-4 md:grid-cols-2">
                            <div className="aspect-video rounded-xl bg-muted/50 border">
                                <p className="p-4 flex flex-row justify-center">
                                    Software Developer | Educação Financeira - Belo Horizonte/MG
                                </p>
                                <p className="p-4">
                                    Educação Financeira é um projeto de idealização pessoal onde eu estou sendo o
                                    responsável pelo levantamento de requisitos, estruturação do projeto e
                                    desenvolvimento.
                                </p>
                                <p className="p-4">
                                    Tecnologias: NodeJs, Express, React, Jenkins, Oracle Cloud, Docker, Portainer, Nginx
                                </p>
                                <ul className="p-4">
                                    <li>
                                        Equilíbrio é um projeto idealizado por mim e que está em seu momento inicial,
                                        após algumas rodadas de apresentação, estou entrando com ele como Projeto de
                                        Extensão na Faculdade Descomplica.
                                    </li>
                                    <br />
                                    <li>
                                        Consegui também o apoio de um curso de educação financeira premiado pelo Banco
                                        Central, que junto a eles, o Equilíbrio terá uma plataforma de educação
                                        financeira.
                                    </li>
                                </ul>
                            </div>
                            <div className="aspect-video rounded-xl bg-muted/50 border">
                                <p className="p-4 flex flex-row justify-center">
                                    Software Developer | Programa Incluir - Belo Horizonte/MG
                                </p>
                                <p className="p-4">
                                    O Incluir é um programa social dentro do prédio de Engenharia da UFMG, destinado a
                                    ensinar inglês e outras disciplinas como empreendedorismo e educação financeira,
                                    para a população interessada e com emissão de certificado.
                                </p>
                                <p className="p-4">
                                    Tecnologias: NodeJs, Express, React, Jenkins, Oracle Cloud, Docker, Portainer, Nginx
                                    Proxy Manager
                                </p>
                                <ul className="p-4">
                                    <li>Professor voluntário de Inglês</li>
                                    <br />
                                    <li>Desenvolvedor de Software</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[50vh] flex-1 rounded-xl bg-stone-600 border md:min-h-min">
                        <p className="p-4 flex flex-row justify-center">EXPERIÊNCIAS PROFISSIONAIS</p>
                        <div className="p-4 grid auto-rows-min gap-4 md:grid-cols-2">
                            <div className="aspect-video rounded-xl bg-muted/50 border">
                                <p className="p-4 flex flex-row justify-center">
                                    Software Developer | Atomos Hyla - Belo Horizonte/MG
                                </p>
                                <p className="p-4">
                                    Dentro da Atomos atuo como desenvolvedor fullstack e fui responsável por realizar
                                    muitas tarefas importantes, acredito que tive bastante impacto em projetos grandes e
                                    com bons feedbacks.
                                </p>
                                <p className="p-4">
                                    Tecnologias: C#, Angular 16, SQL Server, TypeScript, Oracle DataBase, AzureDevOps.
                                </p>
                                <ul className="p-4">
                                    <li>
                                        Fui responsável pela criação de um projeto específico para a empresa AIRBUS,
                                        onde eu fui o levantador de requisitos e o executor do projeto, onde tive um
                                        feedback muito positivo por parte do cliente em relação ao projeto desenvolvido.
                                    </li>
                                    <br />
                                    <li>
                                        Criei algumas ferramentas de muito impacto para as interfaces em um projeto para
                                        a empresa Pirelli, uma delas sendo telas para gestão de produção e gerenciamento
                                        de manutenção de maquinário.
                                    </li>
                                    <br />
                                    <li>
                                        Responsável pela criação de telas para visualização de gráficos importantes para
                                        a empresa Anglo American, onde era possível gerenciar os riscos de suas
                                        barragens com essas informações.
                                    </li>
                                </ul>
                            </div>
                            <div className="aspect-video rounded-xl bg-muted/50 border">
                                <p className="p-4 flex flex-row justify-center">
                                    Software Developer | Greg (ex-ContSelf) - Belo Horizonte/MG
                                </p>
                                <p className="p-4">
                                    Dentro da Greg atuei como Estagiário FullStack, porém com alguns escopos de projetos
                                    e atividades muito significativas no que diz respeito a impacto para com o cliente,
                                    principalmente na parte de pagamentos via boletos, e atendimento via ChatBot .
                                </p>
                                <p className="p-4">Tecnologias: C#, ASP.NET MVC, SQL Server, JavaScript.</p>
                                <ul className="p-4">
                                    <li>
                                        Fui responsável pela criação de um ChatBot de atendimento ao cliente, que dentro
                                        da primeira semana teve um feedback positivo de 100% dos clientes.
                                    </li>
                                    <br />
                                    <li>
                                        Fui responsável pela criação de um sistema gerador de boletos de pagamentos,
                                        para pagamentos de carnê.
                                    </li>
                                    <br />
                                    <li>
                                        Atuei no contato direto com o cliente e na manutenção do sistema integrador com
                                        as prefeituras para geração de nota fiscal de recebimento.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
