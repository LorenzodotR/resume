import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import logo from "/assets/img/image.png";
import { BrainCircuit, Cloud, MonitorCog,Smartphone } from "lucide-react";

const subjects = [
    { name: "Cloud Computing", icon: Cloud },
    { name: "IA Aplicada", icon: BrainCircuit },
    { name: "Testes de Software", icon: MonitorCog },
    { name: "Desenvolvimento Mobile", icon: Smartphone},
]

export default function AboutMe() {
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
                                <BreadcrumbLink href="/pages/education">Educação</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4">
                    <div className="min-h-[100vh] flex-1 rounded-xl bg-stone-600 border md:min-h-min">
                        <p className="p-4 flex flex-row justify-center">
                            <Image src={logo} alt="Logo Descomplica" width={25} height={25} className="rounded-full" />
                            <span className="pl-2"><strong>Faculdade Descomplica EAD</strong></span>
                        </p>
                        <div className="p-4 grid auto-rows-min gap-4 md:grid-cols-2">
                            <div className="aspect-video rounded-xl bg-muted/50 border">
                                <p className="p-4 flex flex-row justify-center">Materias de Destaque</p>
                                <ul className="p-4">
                                    {subjects.map((subject) => (
                                        <li key={subject.name} className="flex flex-row pb-3">
                                            <subject.icon/> <span className="pl-3">{subject.name}</span></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="aspect-video rounded-xl bg-muted/50 border">
                                <p className="p-4 flex flex-row justify-center">Projetos</p>
                                <ul className="p-4">
                                    <li className="pb-3">Projeto de Extensão 2 Semestre: App de Educação Financeira</li>
                                </ul>
                                <p className="p-4">
                                    <span>
                                        O projeto de extensão foi um projeto de idealização pessoal onde eu fui o
                                        responsável pelo levantamento de requisitos, estruturação do projeto e
                                        desenvolvimento.
                                        <br />
                                        Consegui também o apoio de um curso de educação financeira premiado pelo Banco
                                        Central, que junto a eles, o Equilíbrio terá uma plataforma de educação
                                        financeira.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
