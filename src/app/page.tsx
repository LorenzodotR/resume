import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Book, Clapperboard, Music, Gamepad  } from "lucide-react";

const hobbies = [
    { id: 2, name: "Music", icon: Music },
    { id: 3, name: "Read Books" ,icon: Book },
    { id: 5, name: "Watch Series and Movies", icon:  Clapperboard},
    { id: 6, name: "In the free time I like to play some diferent games", icon: Gamepad},
];

const goals = [
    { id: 1, name: "Finalizar a criação do aplicativo de Finanças" },
];

const achievements = [
    { id: 1, name: "Certificado de conclusão do curso de React" },
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
                                <BreadcrumbLink href="/pages/about">Sobre</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 bg-stone-500">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="aspect-video rounded-xl bg-muted/50 border">
                            <p className="p-4 flex flex-row justify-center">Hobbies</p>
                            <ul className="p-4">
                                {hobbies.map((hobby) => (
                                    <li key={hobby.id} className="flex flex-row pb-3">
                                        <hobby.icon />
                                        <span className="pl-2">{hobby.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="aspect-video rounded-xl bg-muted/50 border">
                            <p className="p-4 flex flex-row justify-center">Metas</p>
                            <ul className="p-4">
                                {goals.map((goal) => (
                                    <li key={goal.id} className="flex flex-row justify-between pb-3">
                                        <span>{goal.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="aspect-video rounded-xl bg-muted/50 border">
                            <p className="p-4 flex flex-row justify-center">Conquistas</p>
                            <ul className="p-4">
                                {achievements.map((achievement) => (
                                    <li key={achievement.id} className="flex flex-row justify-between pb-3">
                                        <span>{achievement.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 border md:min-h-min">
                        <p className="p-4 flex flex-row justify-center">Sobre</p>
                        <p className="p-4">
                            Olá, meu nome é <strong>Lorenzo Ribeiro</strong>, sou desenvolvedor de software e apaixonado por
                            tecnologia. Atualmente, estou cursando o último período de Engenharia de Software e sou
                            desenvolvedor fullstack na <strong>Atomos Hyla</strong>. Meu objetivo é me tornar um desenvolvedor que tem projetos impactantes na vida das pessoas
                            e, para isso, estou estudando diversas tecnologias diferentes. Além disso, estou me
                            especializando em finanças e investimentos. Meus hobbies são música, leituras, séries e
                            programação. 
                            <br />
                            Meus objetivos são finalizar a criação do aplicativo de finanças, concluir meu
                            projeto de extensão na faculdade e finalizar minha especialização em finanças.
                        </p>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
