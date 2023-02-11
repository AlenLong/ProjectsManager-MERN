import React from "react";

export const Task = () => {
    return (
        <div>
            <div>
                <p>Nombre de la tarea</p>
                <p>Descripción de la tarea</p>
                <p>Fecha de entrega</p>
                <p>Prioridad</p>
            </div>
            <div>
                <button
                /* onClick={} */
                >
                    Editar
                </button>

                {false ? (
                    <button>
                        Completa
                    </button>
                ) : (
                    <button>
                        Incompleta
                    </button>
                )}

                <button
                /* onClick={} */
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};