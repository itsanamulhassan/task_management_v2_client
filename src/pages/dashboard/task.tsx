import PageWrapper from "@/components/common/wrapper/page-wrapper";
import {
  TableToolbar,
  TableWrapper,
} from "@/components/common/wrapper/table-wrapper";
import { DataTable, type IQueryProps } from "@/components/table/data-table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { ColumnDef } from "@tanstack/react-table";
import { LucideDownload, LucidePlus } from "lucide-react";
import { useState } from "react";

const Task = () => {
  const [query, setQuery] = useState<IQueryProps>({
    sort: "asc",
    page: 1,
    size: 10,
    meta: {
      page: 0,
      size: 10,
      total: 100,
      totalPage: 10,
    },
  });
  const [taskState, setTaskState] = useState({
    taskList: [],
  });

  const columns: ColumnDef<unknown>[] = [
    { accessorKey: "index", header: "Index" },
    // {
    //   accessorKey: "avatar",
    //   header: translate("অবতার", "Avatar"),
    //   cell: ({ row }) => {
    //     const user = row.original as User;

    //     return (
    //       <div className="size-8 rounded-md overflow-hidden">
    //         <PhotoViewer
    //           className="scale-1"
    //           src={user?.avatar}
    //           alt={`Image ${user.name}`}
    //         />
    //       </div>
    //     );
    //   },
    // },
    // {
    //   accessorKey: "name",
    //   header: translate("পুরো নাম", "Full Name"),
    // },

    // {
    //   accessorKey: "contactNo",
    //   header: translate("যোগাযোগ নম্বর", "Contact No"),
    // },
    // {
    //   header: translate("ভূমিকা", "Role"),
    //   cell: ({ row }) => {
    //     const user = row.original as User;
    //     return (
    //       <Badge
    //         size="sm"
    //         shape="pill"
    //         variant={
    //           user?.role?.toLowerCase() === "admin"
    //             ? "tertiary"
    //             : user?.role?.toLowerCase() === "supervisor"
    //             ? "primary"
    //             : "warning"
    //         }
    //       >
    //         {user.role}
    //       </Badge>
    //     );
    //   },
    // },
    // {
    //   header: translate("অবস্থা", "Status"),
    //   cell: ({ row }) => {
    //     const user = row.original as User & { dummyActive: string };
    //     return (
    //       <Badge
    //         size="sm"
    //         shape="pill"
    //         variant={user?.active ? "success" : "destructive"}
    //       >
    //         {user.dummyActive}
    //       </Badge>
    //     );
    //   },
    // },

    // {
    //   header: translate("কার্যক্রমগুলো", "Actions"),
    //   id: "actions",
    //   enableHiding: false,
    //   cell: ({ row }) => {
    //     const user = row.original as User;
    //     return (
    //       <DropdownMenu>
    //         <DropdownMenuTrigger asChild>
    //           <Button variant="ghost" className="h-8 w-8 p-0">
    //             <span className="sr-only">Open menu</span>
    //             <MoreHorizontal className="h-4 w-4" />
    //           </Button>
    //         </DropdownMenuTrigger>
    //         <DropdownMenuContent align="end" className="flex flex-col gap-1">
    //           <DropdownMenuLabel>
    //             {translate("কার্যক্রমগুলো", "Actions")}
    //           </DropdownMenuLabel>

    //           <DropdownMenuSeparator />

    //           {/* UPDATE USER */}
    //           <Dialog>
    //             <DialogTrigger asChild>
    //               <Button
    //                 variant="outline"
    //                 className="w-full flex justify-start"
    //                 size="xs"
    //               >
    //                 {translate("সম্পাদনা করুন", "Update")}
    //               </Button>
    //             </DialogTrigger>
    //             <DialogContent size="lg">
    //               <DialogTitle className="sr-only">empty</DialogTitle>
    //               <UpdateUser id={user?.id} />
    //             </DialogContent>
    //           </Dialog>

    //           {/* DETAILS USER */}
    //           <Dialog>
    //             <DialogTrigger asChild>
    //               <Button
    //                 variant="outline"
    //                 className="w-full flex justify-start"
    //                 size="xs"
    //               >
    //                 {translate("বিস্তারিত", "Details")}
    //               </Button>
    //             </DialogTrigger>
    //             <DialogContent size="lg">
    //               <DialogTitle className="sr-only">empty</DialogTitle>
    //               <DetailsUser id={user?.id} />
    //             </DialogContent>
    //           </Dialog>

    //           {/* USER DELETE */}
    //           <DeleteAlertDialog
    //             position="start"
    //             actionHandler={() => userDeleteHandler(user.id)}
    //             alertLabel={translate("ব্যবহারকারী", "User")}
    //           />
    //         </DropdownMenuContent>
    //       </DropdownMenu>
    //     );
    //   },
    // },
  ];

  return (
    <PageWrapper>
      <TableWrapper
        subHeading="Task list and all relevant information & data"
        heading="User"
      >
        <TableToolbar alignment="end">
          <ul className="flex items-center gap-x-2">
            <li>
              <Input
                // onChange={(e: ChangeEvent<HTMLInputElement>) =>

                // }
                className="w-[300px]"
                placeholder="Enter name / email for searching"
              />
            </li>
            <li>
              <Dialog
              // open={userState.addUserOpen}
              // onOpenChange={(open: boolean) =>
              //   setUserState((prevState: IUserStateProps) => ({
              //     ...prevState,
              //     addUserOpen: open,
              //   }))
              // }
              >
                <DialogTrigger asChild>
                  <Button
                    className="group relative"
                    variant="outline"
                    size="icon"
                  >
                    <LucidePlus />
                    <span className="custom-tooltip-top">
                      {/* {translate("ব্যবহারকারী যুক্ত করুন", "Add User")} */}
                    </span>
                  </Button>
                </DialogTrigger>
                <DialogContent size="lg">
                  <DialogTitle className="sr-only">empty</DialogTitle>
                  {/* <AddUser setUserState={setUserState} /> */}
                </DialogContent>
              </Dialog>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <LucideDownload className="size-4 mr-1" />
                    {/* {translate("এক্সপোর্ট", " Export")} */}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={cn("w-[100px] space-y-2")}
                  align="end"
                >
                  <DropdownMenuItem>
                    {/* {translate("পিডিএফ", "Pdf")} */}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    {/* {translate("এক্সেল", "Excel")} */}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </TableToolbar>
        <DataTable
          query={query}
          setQuery={setQuery}
          pagination
          columns={columns}
          data={taskState.taskList}
        />
      </TableWrapper>
    </PageWrapper>
  );
};

export default Task;
