import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";

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
                <div className="flex flex-1 flex-col gap-4 p-4">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="aspect-video rounded-xl bg-muted/50 border">
                            <p className="p-4 flex flex-row justify-center">Hobbies</p>
                        </div>
                        <div className="aspect-video rounded-xl bg-muted/50 border">
                            <p className="p-4 flex flex-row justify-center">Metas</p>
                        </div>
                        <div className="aspect-video rounded-xl bg-muted/50 border">
                            <p className="p-4 flex flex-row justify-center">Conquistas</p>
                        </div>
                    </div>
                    <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 border md:min-h-min">
                        <p className="p-4 flex flex-row justify-center">Sobre</p>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
