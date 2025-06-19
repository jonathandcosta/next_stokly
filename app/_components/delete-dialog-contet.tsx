import { toast } from "sonner";
import { deleteProduct } from "../_actions/delete-product";
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog";

interface DeleteProductDialogContentProps {
  productId: string;
}

const DeleteProductDialogContent = ({ productId, }: DeleteProductDialogContentProps) => {
  const handleContinueClick = async () => {
    try {
      await deleteProduct({ id: productId });
      toast.success("Produto deletado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao deletar o produto. Tente novamente mais tarde.");
    }
  }
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
        <AlertDialogAction onClick={handleContinueClick}>Continuar</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}
export default DeleteProductDialogContent;