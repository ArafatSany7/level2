// as constant assertion

// enum userRoles{
//     Admin= "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer"
// }

const userRoles = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;

const canEdit = (role: (typeof userRoles)[keyof typeof userRoles]) => {
  if (role === userRoles.Admin || role === userRoles.Editor) {
    return true;
  } else return false;
};

const isEditPermission = canEdit(userRoles.Admin);
console.log(isEditPermission);
