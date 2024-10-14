import React from 'react';

interface ModalProps {
    isOpen: boolean; // 모달 열림 상태
    onClose: () => void; // 모달 닫기 함수

    children: React.ReactNode; // 모달 내용
}

const FormModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={onClose} // 모달 외부 클릭 시 닫기
        >
            <div
                className="bg-white p-6 rounded-[10px] w-96 shadow-lg relative"
                onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 부모요소를 따라 닫힘 방지
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition duration-200"
                >
                    ✖
                </button>

                {children}
                <button onClick={onClose} className="mt-4 w-[50%] px-4 py-2 bg-blue-500 text-white rounded-md">
                    확인
                </button>
            </div>
        </div>
    );
};

export default FormModal;