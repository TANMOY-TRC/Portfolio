"use client"

import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  MenuItem,
  MenuItemLink,
  MenuItemLabel,
  MenuItemSeparator,
  MenuItemThemeToggle,
  NavigationItemContainer
} from "@/components/ui/navigation-menu";
import { sitemap, themeConfig } from "@/config";

function NavBar() {
  const pathname = usePathname() ?? "";
  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");
  const { home, ...navItems } = sitemap;

  return (
    <>
      <NavigationMenu fadeMask>
        <NavigationItemContainer className="bg-card/80">
          {/* Home */}
          <MenuItem asChild>
            <MenuItemLink href={home.path} selected={isActive(home.path)} prefetch={false} aria-label={home.label}>
              {home.icon}
              {!themeConfig.menuGroupSeparator &&
                <MenuItemLabel className="sm:hidden lg:flex">
                  {home.label}
                </MenuItemLabel>
              }
            </MenuItemLink>
          </MenuItem>

          {/* Separator */}
          {themeConfig.menuGroupSeparator && <MenuItemSeparator />}

          {/* Navigation Items */}
          {Object.entries(navItems).map(([key, navItem]) => (
            <MenuItem asChild key={key}>
              <MenuItemLink href={navItem.path} selected={isActive(navItem.path)} prefetch={false} aria-label={navItem.label}>
                {navItem.icon}
                <MenuItemLabel className="sm:hidden lg:flex">
                  {navItem.label}
                </MenuItemLabel>
              </MenuItemLink>
            </MenuItem>
          ))}

          {/* Separator */}
          {themeConfig.menuGroupSeparator && themeConfig.themeToggleOption && <MenuItemSeparator />}

          {/* Theme Toggle */}
          {themeConfig.themeToggleOption && <MenuItemThemeToggle />}
        </NavigationItemContainer>
      </NavigationMenu>
    </>
  );
}

export { NavBar };
