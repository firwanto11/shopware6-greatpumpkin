<?php declare(strict_types=1);

namespace ThStarterPlugin\Storefront\Controller;

use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Controller\StorefrontController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use ThStarterPlugin\Service\EmailService;

#[Route(defaults: ['_routeScope' => ['storefront']])]
class ExampleController extends StorefrontController
{
    /**
    * @var EmailService 
    */
    private $emailService;

    public function __construct(EmailService $emailService)
    {
        $this->emailService = $emailService;
    }


    #[Route(path: '/example', name: 'frontend.example.example', methods: ['GET'])]
    public function showExample(Request $request, SalesChannelContext $context): Response
    {

        $email = 'ficky.irwanto@think11.com';
        $message = $this->renderView('@ThStarterPlugin/email/contact.html.twig', [
            'name' => 'test name'
        ]);
        // $message = '
        //     <p>This is a testing email</p>
        //     <p>TEST TEST TEST</p>
        // ';
        $this->emailService->sendMail([$email => 'Ficky Irwanto'], 'Test sender', 'Test subject', $message, $context);

        $response = new Response(json_encode($message));
        $response->headers->set('Content-Type', 'application/json');
        return $response;
        // return JsonResponse(["message" => "Hello World!"]);
        // return $this->renderStorefront('@ThStarterPlugin/storefront/page/example/index.html.twig', [
        //     'example' => 'Hello world'
        // ]);
    }
}