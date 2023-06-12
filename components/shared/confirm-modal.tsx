import { ID } from "@/models/id.interface";

type ConfirmModalT = {
  modalId: string;
  titleButton?: string;
  icon: JSX.Element;
  handleDelete: () => void;
  title: string;
  message: string;
};
export const ConfirmDeleteModal = ({
  modalId,
  icon,

  handleDelete,
  title,
  message,
}: ConfirmModalT) => {
  return (
    <>
      <label
        htmlFor={modalId}
        className="absolute top-0 right-2 md:right-0 btn-primary btn btn-circle btn-outline"
      >
        {icon}
      </label>
      <input type="checkbox" id={modalId} className="modal-toggle" />

      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="flex items-center justify-between">
            <div className="modal-action">
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleDelete}
              >
                confirmar
              </button>
            </div>
            <div className="modal-action">
              <label htmlFor={modalId} className="btn btn-error">
                cancelar
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
