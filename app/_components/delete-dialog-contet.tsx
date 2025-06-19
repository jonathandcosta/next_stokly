import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog";

const DeleteProductDialogContent = () => {
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Você tem Certeza?</AlertDialogTitle>
        <AlertDialogDescription>
          Você está prestes a deletar o produto. Esta ação não pode ser desfeita.
          <br />
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction>Continuar</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}

export default DeleteProductDialogContent;