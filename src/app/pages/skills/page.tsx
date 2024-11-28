import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { MessagesSquare } from "lucide-react";

const languages = [
    { name: "Portugues", level: "Nativo", icon: MessagesSquare },
    { name: "Ingles", level: "Avançado", icon: MessagesSquare },
    { name: "Italiano", level: "Intermediario", icon: MessagesSquare },
];

const hardSkills = [{ name: "Typescript" }, { name: "NodeJs" }, { name: "React" }, { name: "Angular" }, { name: "C#" }];

const softSkills = [
    { name: "Trabalho em equipe" },
    { name: "Comunicação" },
    { name: "Liderança" },
    { name: "Proatividade" },
    { name: "Resolução de problemas" },
];

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
                                <BreadcrumbLink href="/pages/skills">Habilidades</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 bg-stone-600">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="aspect-video rounded-xl bg-muted/50 border">
                            <p className="p-4 flex flex-row justify-center">Idiomas</p>
                            <ul className="p-4">
                                {languages.map((language) => (
                                    <li key={language.name} className="flex flex-row pb-3">
                                       <language.icon/> 
                                       <span className="pl-2">{language.name} - {language.level}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="aspect-video rounded-xl bg-muted/50 border">
                            <p className="p-4 flex flex-row justify-center">Habilidades Interpessoais</p>
                            <ul className="p-4">
                                {softSkills.map((softSkills) => (
                                    <li key={softSkills.name}>{softSkills.name}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="aspect-video rounded-xl bg-muted/50 border">
                            <p className="p-4 flex flex-row justify-center">Habilidades Tecnincas</p>
                            <ul className="p-4">
                                {hardSkills.map((hardSkills) => (
                                    <li key={hardSkills.name}>{hardSkills.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
