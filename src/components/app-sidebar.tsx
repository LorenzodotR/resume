import { User, Wrench, Rocket, GraduationCapIcon } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem,} from "@/components/ui/sidebar";

// Menu items.
const items = [
    {
        title: "Sobre",
        url: "/pages/about",
        icon: User,
    },
    {
        title: "Habilidades",
        url: "/pages/skills",
        icon: Wrench,
    },
    {
        title: "Experiências",
        url: "/pages/experience",
        icon: Rocket,
    },
    {
        title: "Educação",
        url: "/pages/education",
        icon: GraduationCapIcon,
    },
];

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel >Lorenzo Grei Ribeiro</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
