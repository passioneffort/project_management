import { Button } from "@/common/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/common/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/common/components/ui/tabs"
import { CalendarDateRangePicker } from "@/modules/user/dashboard/components/date-range-picker"
import { MainNav } from "@/modules/user/dashboard/components/main-nav"
import { Overview } from "@/modules/user/dashboard/components/overview"
import { RecentSales } from "@/modules/user/dashboard/components/recent-sales"
import { Search } from "@/modules/user/dashboard/components/search"
import TeamSwitcher from "@/modules/user/dashboard/components/team-switcher"
import { UserNav } from "@/modules/user/dashboard/components/user-nav"
import { useEffect, useState } from "react"
import { styled } from "styled-components"

const FileSelectorWrapper = styled.div(() => ({
  height: "150px",
  width: "100%",
  border: "1px solid var(--tertiary)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  borderRadius: "5px",
}));

export default function DashboardPage() {

  useEffect(() => {
    const handleFileDrop = (event: any) => {
      event.preventDefault();

      const filePath = event.dataTransfer.files[0].path;
      console.log(`Got file path: ${filePath}`);
      callCli(filePath);
    };
    async function callCli(resPath: string) {
      console.log(`Obtained file/folder path: ${resPath}`);

      // try {
      //   const { stdout } = await execAsync(
      //     `./src/sage/sage_mac -f ./src/sage/small.fasta -o ./src/sage ./src/sage/config.json ./src/sage/test.mzML`
      //   );

      //   console.log(`stdout: ${stdout}`);
      // } catch (error) {
      //   console.error(`Error: ${error.message}`);
      // }
    }

    // useEffect(() => {
    //   let unlisten: any;
    //   (async function listenForFileDrop() {
    //     unlisten = await listen<string>('tauri://file-drop', (event) => {
    //       console.log(`Got file path: ${event.payload}`);
    //       invoke("call_cli", {resPath: event.payload.toString()});
    //     });
    //   })()
    //   return () => {
    //     if (unlisten) {
    //       unlisten();
    //       console.log('File drop listener has been removed.');
    //     }
    //   };;
    // }, []);
    const removeFileDropListener = () => {
      document.removeEventListener('drop', handleFileDrop);
      console.log('File drop listener has been removed.');
    };

    const setupFileDropListener = () => {
      console.log('setup filedrop');
      document.addEventListener('drop', handleFileDrop);
    };

    setupFileDropListener();

    return () => {
      removeFileDropListener();
    };
  }, []);

  return (
    <>
      <div className="flex-col md:flex">
        <div className="border-b bg-secondary text-secondary-foreground">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <FileSelectorWrapper>Drag and drop your file/folder here</FileSelectorWrapper>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 [&>div]:border-tertiary">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Subscriptions
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Now
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 [&>div]:border-tertiary">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>
                  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
